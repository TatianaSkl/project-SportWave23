export const theme = Object.freeze({
  colors: {
    main: '#040404',
    accent: '#EF8964',
    orange: '#E6533C',
    beige: '#EFA082',
    white: '#EFEDE8',
    normal: '#EFEDE899',
    success: '#3CBF61',
    error: '#D80027',
    statisticsVideo: '#303030',
  },
  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '22px',
  },
  spacing: value => `${4 * value}px`,
  shadows: {
    small: '5px 5px 7px -1px rgba(255, 255, 255, 0.5)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 47px 47px 11px rgba(255, 255, 255, 0.5);',
  },
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
});
