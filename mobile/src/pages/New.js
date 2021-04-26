import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

import api from '../services/api';

const New = ({navigation}) => {
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);
  const [author, setAuthor] = useState('');
  const [place, setPlace] = useState('');
  const [description, setDescription] = useState('');
  const [hashtags, setHashtags] = useState('');

  const handleSelectImage = () => {
    launchImageLibrary({}, async upload => {
      if (upload.error) {
        console.log('ImagePicker Error');
      } else if (upload.didCancel) {
        console.log('Canceled by user');
      } else {
        const imagePreview = {
          uri: upload.uri,
        };

        let prefix, extension;

        if (upload.fileName) {
          [prefix, extension] = upload.fileName.split('.');
          extension = extension.toLowerCase() === 'heic' ? 'jpg' : extension;
        } else {
          prefix = new Date().getTime();
          extension = 'jpg';
        }

        const newImage = {
          uri: upload.uri,
          type: upload.type,
          name: `${prefix}.${extension}`,
        };

        setPreview(imagePreview);
        setImage(newImage);
      }
    });
  };

  const handleSubmit = async () => {
    const data = new FormData();

    data.append('image', image);
    data.append('author', author);
    data.append('place', place);
    data.append('description', description);
    data.append('hashtags', hashtags);

    await api.post('posts', data);

    navigation.navigate('Feed');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.selectButton} onPress={handleSelectImage}>
        <Text style={styles.selectButtonText}>Selecionar imagem</Text>
      </TouchableOpacity>

      {preview && <Image style={styles.preview} source={preview} />}

      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Nome do autor"
        placeholderTextColor="#999"
        value={author}
        onChangeText={authorValue => setAuthor(authorValue)}
      />
      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Local da foto"
        placeholderTextColor="#999"
        value={place}
        onChangeText={placeValue => setPlace(placeValue)}
      />
      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Descrição"
        placeholderTextColor="#999"
        value={description}
        onChangeText={descriptionValue => setDescription(descriptionValue)}
      />
      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Hashtags"
        placeholderTextColor="#999"
        value={hashtags}
        onChangeText={hashtagsValue => setHashtags(hashtagsValue)}
      />

      <TouchableOpacity style={styles.shareButton} onPress={handleSubmit}>
        <Text style={styles.shareButtonText}>Compartilhar</Text>
      </TouchableOpacity>
    </View>
  );
};

New.navigationOptions = () => ({
  headerTitle: 'Nova publicação',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },

  selectButton: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#CCC',
    borderStyle: 'dashed',
    height: 42,

    justifyContent: 'center',
    alignItems: 'center',
  },

  selectButtonText: {
    fontSize: 16,
    color: '#666',
  },

  preview: {
    width: 100,
    height: 100,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 4,
  },

  input: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginTop: 10,
    fontSize: 16,
  },

  shareButton: {
    backgroundColor: '#7159c1',
    borderRadius: 4,
    height: 42,
    marginTop: 15,

    justifyContent: 'center',
    alignItems: 'center',
  },

  shareButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFF',
  },
});

export default New;
