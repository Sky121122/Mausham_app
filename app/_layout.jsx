import { Stack } from 'expo-router'

const Rootlayout = () => {
  return (
   <Stack screenOptions={{headerShown:false}}>
    <Stack.Screen name='index' />
   </Stack>
  )
}

export default Rootlayout