import React from 'react';
import {Feather} from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View, Text, TouchableOpacity , Image, Linking} from 'react-native';
import * as MailComposer from 'expo-mail-composer';
//imports da app
import logoImg from '../../assets/logo.png';
import styles from './styles';

//funcao details
export default function Detail(){
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `Olá ${incident.name}, gostaria de ajudar no caso ${incident.title}} com o valor de 
    ${Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(incident.value)}`;

  function navigateBack(){
    navigation.goBack()
  }
 
  function sendMail(){t
    MailComposer.composeAsync({
        subject:`Herói do caso: ${incident.title}`,
        recipients:[incident.email],
        body: message

    })
  }

  function sendWhatsApp(){
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
  }

  return (
      <View style ={StyleSheet.container}>
       <View  style= {style.header}>
           <Image source={logoImg}/>
          
          <TouchableOpacity  
                  OnPress={()=>{}}
            >              
              <Feather name="arrow-left" size={28} color = "#E02041"/>
            </TouchableOpacity>
        </View>

        <View style={styles.incident}>
            <Text style={[styles.incidentProperty,{marginTop:0}]}>ONG:</Text>
           <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>
            
            <Text style={styles.incidentProperty}>Caso:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>Valor:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}
                ).format(incident.value)}</Text>
        </View>
        
        <View style={styles.contactBox}>
            <Text style={styles.heroTile}>Salve o dia!</Text>
            <Text style={styles.heroTile}>Seja o herói desse caso.</Text>
            
            <Text style={styles.heroDescritption}>Entre em contato</Text>

            <View style={styles.actions}>
              <TouchableOpacity style={styles.action}
                onPress={sendWhatsApp}>
                <Text style = {styles.actionText}>WhatsApp</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.action}
                onPress={sendMail}>
                <Text style = {styles.actionText}>E-mail</Text>
              </TouchableOpacity>
              
            </View>
            <Text style={styles.incidentProperty}>Valor:</Text>
            <Text style={styles.incidentValue}>R$ 120,00</Text>
        </View>
        
      </View>
      );
}