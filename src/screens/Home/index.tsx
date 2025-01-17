import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from './styles'
import { Participant } from "../components/Participant";

export function Home(){ 

  const participants = ['Igor', 'João', 'Daniel', 'Samuel', 'Tiago', 'Rafael', 'Vitor', 'Maria', 'Jaqueline', 'Matheus', 'José', 'Pedro', 'Paulo']

  async function handleParticipantAdd(){
    if (participants.includes('Igor')){
      return Alert.alert('Participante existe', 'Já existe um participante na lista com esse nome')
    }
  } 

  function handleParticipantRemove(name: string){
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!')
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>

      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>

    <View style={styles.form}>
      <TextInput 
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor={'#6B6B6B'}          
      />

      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>

    <FlatList 
      data={participants}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <Participant 
          key={item}
          name={item} 
          onRemove={() => handleParticipantRemove(item)}
        />
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <Text style={styles.listEmptytext}>
          Ninguém chegou no evento ainda? Adicione participantes a sua lsita de presença.
        </Text>
      )}
    />

    </View>
  )
}