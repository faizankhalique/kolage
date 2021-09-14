import React, {useEffect, useState} from 'react'
import {View} from 'react-native'

import AppHeader from '@components/AppHeader'
import AppWrapper from '@components/AppWrapper'
import DesignBox from './components/DesignBox'
import DesignScreenBottom from './components/DesignScreenBottom'
import {DesignScreenStyles as styles} from '@styles/DesignScreenStyles'

const DesignScreen = ({navigation}: any) => {
  const [activeMode, setActiveMode] = useState('landscape')
  const [items, setItems] = useState([{id: 1}, {id: 2}, {id: 3}, {id: 4}])
  const [isExpanded, setExpanded] = useState(true)
  useEffect(() => {
    const parent = navigation.dangerouslyGetParent()
    parent.setOptions({
      tabBarVisible: false,
    })
    return () => {
      parent.setOptions({
        tabBarVisible: true,
      })
    }
  }, [])
  const handleToolItemPress = (toolType) => {
    if (toolType == 'square') {
      setExpanded(false)
    }
    if (toolType == 'expand') {
      setExpanded(true)
    }
  }
  const handleAddRemoveBoxPress = (type) => {
    if (type == 'remove' && items.length > 0) {
      const length = items.length
      setItems(items.filter((item, i) => length !== i + 1))
    } else if (type == 'add') {
      setItems([...items, {id: Math.random()}])
    }
  }
  return (
    <AppWrapper>
      <AppHeader
        title={activeMode}
        titleStyles={styles.headerTitle}
        isGoBack
        isLeftTextButtonTitle
        leftTextButtonTitle={'Preview'}
        onLeftTextButtonPress={() => {}}
      />
      <View
        style={{
          flex: 1,
        }}>
        <DesignBox type={activeMode} items={items} isExpanded={isExpanded} />
      </View>
      <DesignScreenBottom
        activeMode={activeMode}
        setActiveMode={setActiveMode}
        onToolItemPress={handleToolItemPress}
        onAddRemoveBoxPress={handleAddRemoveBoxPress}
        isExpanded={isExpanded}
      />
    </AppWrapper>
  )
}

export default DesignScreen
