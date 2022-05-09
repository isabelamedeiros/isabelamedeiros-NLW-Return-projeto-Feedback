import React from 'react';
import { ArrowLeft } from 'phosphor-react-native';
import { View, TextInput, Image, Text, TouchableOpacity, Button } from 'react-native';

import { FeedbackType } from '../../components/Widget';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { ScreenshotButton } from '../../components/ScreenshotButton';

import { styles } from './styles';
import { theme } from '../../theme';

interface Props {
  feedbackType: FeedbackType;
}

export function Form({ feedbackType }: Props){
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        </View>

        <TextInput
          multiline
          style={styles.input}
          placeholder="Algo não está funcionando bem? "
          placeholderTextColor={theme.colors.text_secondary}
        />

        <View style={styles.footer}>
          <ScreenshotButton
            onTakeShot={() => {}}
            onRemoveShot={() => {}}
            screenshot=""
          />

          <Button isLoading={false}/>
          </View>

        {/* <TouchableOpacity>
          <ArrowLeft 
          size = {24}
          weight = "bold"
          color = {theme.colors.text_secondary}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <image 
            source={feedbackTypeInfo.image}
            style={styles.image}
          />
          <Text style={styles.titleText}>
              {feedbackTypeInfo.title}
            </Text>
        </View> */}
    </View>
  );
}