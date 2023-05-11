import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

import 'react-native-gesture-handler';
import { SimpleLineIcons, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';

import Backups from './screens/Backups';
import Categories from './screens/Categories';
import Contact from './screens/Contact';
import Customize from './screens/Customize';
import GetPremiun from './screens/GetPremiun';
import Home from './screens/Home';
import RateApp from './screens/RateApp';
import Settings from './screens/Settings';
import Timer from './screens/Timer';
import User from './assets/user.png'

const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator
          drawerContent={
            (props) => {
              return(
                <SafeAreaView>
                  <View
                    style = {{
                      flex: 1,
                      height:200,
                      width:'100%',
                      backgroundColor: 'orange',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderBottomColor:'white',
                      borderBottomWidth:1
                    }}
                  >
                    <Image
                      source = {User}
                      style={{
                        height:130,
                        width:130,
                        borderRadius:70
                      }}
                    />
                    <Text
                    style={{
                      fontSize:50,
                      marginVertical:5,
                      fontWeight:'bold'
                    }}
                    
                    >Maria</Text>                    
                  </View>
                  <DrawerItemList {...props}/>
                </SafeAreaView>
              )
            }
          }


          screenOptions={{
            drawerStyle:{
              backgroundColor:'#fff',
              width:250,
            },
            headerStyle:{
              backgroundColor:'#000000',
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
              fontWeight:'bold',
              
            },
            drawerActiveTintColor:'blue',
            drawerLabelStyle:{
              color:'#111'
            }
          }}
        >
            <Drawer.Screen 
              name='Home'
              component={Home} 
              options={{
                drawerLabel:'Home',
                title:'Home',
                drawerIcon: () =>(
                  <SimpleLineIcons name='home' size={20} color='#808080'/>
                )
              }}
              />

            <Drawer.Screen 
              name='Timer'
              component={Timer} 
              options={{
                drawerLabel:'Timer',
                title:'Timer',
                drawerIcon: () =>(
                  <MaterialIcons name='home' size={20} color='#808080'/>
                )
              }}
              />

            <Drawer.Screen 
              name='Backups'
              component={Backups} 
              options={{
                drawerLabel:'Backups',
                title:'Backups',
                drawerIcon: () =>(
                  <MaterialIcons name='home' size={20} color='#808080'/>
                )
              }}
              />  

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:200,
    width:'100%',
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor:'white',
    borderBottomWidth:1
  },
});
