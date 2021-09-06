import React, {useState, useEffect,useCallback} from 'react';
import {View,FlatList, ActivityIndicator} from 'react-native';
import md5 from 'js-md5'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector} from 'react-redux';
import { LogBox } from 'react-native';

import styles from './styles'
import api from '../../services/api'
import ListItem from './components/ListItem'
import HeroDetails from './components/HeroDetails'




export default function App() {
  //---------INICIAL STATE--------------
  const [page,setPage] = useState(0)
  const insets = useSafeAreaInsets();
  const [listData,setListData] = useState([])
  const [loading,setLoading] = useState(false)
  const [footerLoading, setFooterLoading] = useState(false)
  const dispatch = useDispatch();


  //------------REDUX-------------------
  const renderDetails = useSelector((state) => state.renderDetails);
  const setRenderDetails = useCallback(
    (boolean) => dispatch({ type: 'setRenderDetails', value: boolean }),
    [dispatch],
  );
  const setDetailInfo = useCallback(
    (object) => dispatch({ type: 'setDetailInfo', value: object }),
    [dispatch],
  );

  //-------------------------------

  const publicKey = 'a7d75c3ab65acc5b4b9cbab61c5a9088'
  const privateKey = '5cf2e1a3eb795e99a9eb079e954aa5e4691d33bf'

  useEffect(() => {
    loadData()
  },[])

  async function loadData(){

    if(loading) return;

    setLoading(true)
    const timestamp = Number(new Date())
    const hash = md5.create()
    hash.update(timestamp + privateKey + publicKey)

    const response =  await api.get(`v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash.hex()}&offset=${50*page}&limit=50`)
    setListData([...listData,...response.data.data.results])
    setPage(page+1)
    setLoading(false)

  }


  function renderFooter(){
    return (
      <>
      {loading && 
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="white"/>
      </View> 
      }
      </>
    )
  }


  const handleItemPress = useCallback((item)=> {
    setDetailInfo(item)
    setRenderDetails(true)

  },[])

  LogBox.ignoreAllLogs()

  return (
    <>
    <LinearGradient
    start={[0, 0]}
    end={[1.0, 1.0]}
    colors={['#EB3030', '#520105']}
    style={[styles.container, { paddingTop: insets.top }]}
    >
        <FlatList
        style={styles.flatList}
        onEndReached={loadData}
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={0.2}
        data={listData} 
        renderItem={ ({item,index,separator}) => (
          <ListItem 
            onPress={()=>handleItemPress(item)}
            image={item.thumbnail} 
            name={item.name} 
            id={item.id}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={()=> <View style={{height:1, width:'90%', alignSelf: 'center', backgroundColor: '#ffffff40'}} />}
        >
        </FlatList>
    </LinearGradient>
    {renderDetails && <HeroDetails />}

    </>
  );
};
