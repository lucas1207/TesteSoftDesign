import React from 'react';
import {
  Image, Text, TouchableOpacity, TouchableOpacityProps,
} from 'react-native';


import styles from './styles';


interface ListItemProps extends TouchableOpacityProps {
    name: string,
    image: string,
}

const ListItem: React.FC<ListItemProps> = ({name,image,...rest}) => {

  return (
    <TouchableOpacity {...rest} style={styles.container}>
      <Image style={styles.imageAvatar} source={{uri:`${image.path}/standard_medium.jpg`}}/>
        <Text style={styles.textName}>{name}</Text>
    </TouchableOpacity>
  );
};
export default ListItem;
