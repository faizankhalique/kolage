import AsyncStorage from '@react-native-community/async-storage'

const StorageKeys = {
  USER_ID: 'userId',
  USER_TOKEN: 'user_token',
  USER_EMAIL: 'user_email',
}

const saveItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value).then()
    return true
  } catch (error) {
    console.log('Error')
    return false
  }
}

const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
    return true
  } catch (exception) {
    return false
  }
}

const getItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      return value
    } else {
      return false
    }
  } catch (error) {
    console.log(error)
    return false
  }
}

export default {
  removeItem,
  StorageKeys,
  getItem,
  saveItem,
}
