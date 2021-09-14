import React from 'react'
import {View} from 'react-native'

import AddRemoveBox from './AddRemoveBox'
import DesignModeSelector from './DesignModeSelector'
import DesignToolItem from './DesignToolItem'
import {getFontSize} from '@components/AppText'
import {DesignScreenStyles as styles} from '@styles/DesignScreenStyles'

interface Props {
  activeMode: string
  setActiveMode: any
  onToolItemPress: any
  onAddRemoveBoxPress: any
  isExpanded: boolean
}
function DesignScreenBottom({
  activeMode,
  setActiveMode,
  onToolItemPress,
  onAddRemoveBoxPress,
  isExpanded,
}: Props) {
  return (
    <>
      {!isExpanded ? (
        <AddRemoveBox onPress={onAddRemoveBoxPress} />
      ) : (
        <View style={styles.selectorContainer}>
          <DesignModeSelector
            title={'Landscape'}
            type={'landscape'}
            active={activeMode}
            setActive={setActiveMode}
          />
          <DesignModeSelector
            title={'Square'}
            type={'square'}
            active={activeMode}
            setActive={setActiveMode}
          />
          <DesignModeSelector
            title={'Potrait'}
            type={'potrait'}
            active={activeMode}
            setActive={setActiveMode}
          />
          <DesignModeSelector
            title={'Stories'}
            type={'stories'}
            active={activeMode}
            setActive={setActiveMode}
          />
        </View>
      )}
      <View style={styles.toolContainer}>
        <DesignToolItem
          iconName={'circle'}
          iconType={'FontAwesome'}
          onPress={() => onToolItemPress('color')}
        />
        <DesignToolItem
          iconName={'type'}
          iconType={'Feather'}
          onPress={() => onToolItemPress('text')}
        />

        <DesignToolItem
          iconName={'add-circle'}
          iconType={'MaterialIcons'}
          iconStyles={{fontSize: getFontSize(45)}}
          onPress={() => onToolItemPress('add')}
        />

        <DesignToolItem
          iconName={'resize-full-screen'}
          iconType={'Entypo'}
          onPress={() => onToolItemPress('expand')}
        />

        <DesignToolItem
          iconName={'square-outline'}
          iconType={'MaterialCommunityIcons'}
          onPress={() => onToolItemPress('square')}
        />
      </View>
    </>
  )
}

export default DesignScreenBottom
