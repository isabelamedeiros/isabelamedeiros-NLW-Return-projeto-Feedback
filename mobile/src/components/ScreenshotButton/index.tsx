import { Trash } from 'phosphor-react-native';
import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface Props {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;
}
export function ScreenshotButton({ screenshot, onTakeShot, onRemoveShot }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={screenshot ? onRemoveShot : onTakeShot}>
      {
        screenshot
        ?
        <Trash size={12} color={theme.colors.text_secondary} weight="fill" style={styles.removeIcon} />
        :
        <Trash size={24} color={theme.colors.text_primary} weight="bold"/>
      }
    </TouchableOpacity>
  );
}