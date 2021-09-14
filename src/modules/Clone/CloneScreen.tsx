import React from 'react'
import {FlatList, View} from 'react-native'

import AppHeader from '@components/AppHeader'
import AppWrapper from '@components/AppWrapper'
import ListItem from './components/ListItem'
import {CloneScreenStyles as styles} from '@styles/CloneScreenStyles'
import {Heading3} from '@components/AppText'

const data = [
  {
    id: 1,
    title: 'Plastic',
    subtitle: '15 Templates',
    image: require('@assets/image1.jpeg'),
    price: 'Buy for Rs 300',
    category: 'Included with Premium',
  },
  {
    id: 2,
    title: 'Tape',
    subtitle: '15 Templates',
    image: require('@assets/image2.jpeg'),
    price: 'Buy for Rs 300',
    category: 'Included with Premium',
  },
  {
    id: 3,
    title: 'SCRL 95',
    subtitle: '15 Templates',
    image: require('@assets/image3.jpeg'),
    price: 'Buy for Rs 300',
    category: 'Included with Premium',
  },
]

const CloneScreen = () => {
  return (
    <AppWrapper>
      <AppHeader title={'Kollage'} />
      <View style={styles.container}>
        <Heading3 style={styles.headerText}>Template Packs</Heading3>
        <FlatList
          data={data}
          keyExtractor={() => Math.random().toString()}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
              price={item.price}
              category={item.category}
            />
          )}
        />
      </View>
    </AppWrapper>
  )
}

export default CloneScreen
