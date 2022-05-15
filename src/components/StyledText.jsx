import react from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from '../theme.js'

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal
  },
  bold: {
    fontWeight: theme.fontWeights.bold
  },
  blue: {
    color: '#09f'
  },
  subheading: {
    fontSize: theme.fontSizes.subheading
  },
  colorPrimary: {
    color: theme.colors.textprimary
  },
  colorSecondary: {
    color: theme.colors.textsecondary
  },
  align: {
    textAlign: 'center'
  }
})

export default function StyledText ({ children, color, fontSize, fontWeight, style, align, ...restOfProps }) {
  const textStyle = [
    styles.text,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subheading' && styles.subheading,
    fontWeight === 'bold' && styles.bold,
    align === 'center' && styles.align,
    style
  ]

  return (
        <Text style={textStyle} {... restOfProps}>
            {children}
        </Text>
  )
}
