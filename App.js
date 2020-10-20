import React,{useState} from 'react';
import { View, StyleSheet,TouchableOpacity,Text } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#303070',
    flex: 1,
    margin: 1,
  },
  bigButton: {
      backgroundColor: '#202050',
      flex: 2,
      margin: 1,
    },

  panel: {
        backgroundColor: 'pink',
        flex: 1,
        flexDirection: 'row',
  },
  panel2: {
          backgroundColor: '#101030',
          flex: 2,
          flexDirection: 'row',
   },
   fontKey: {
       fontSize: 70,
       textAlign: "center",
       color: "#FFFF70",
   }


});

function counts(number,value){
    let submit = number.toString() + value;
    return submit;
}


const Call = () => {



        let submit = 0;
        let number1 = "0";
        let number2 = "";
        let count = counts(submit,"");

        const onPress1 = () => submit => 2;
        const onPressAC = () => setNumber(submit => submit +  2);

    return (

      <View style={{flexDirection: 'column', flex: 2}}>
        <View style={styles.panel2}>
            <Text style={styles.fontKey}>{count}</Text>
        </View>

        <View style={styles.panel}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.fontKey} onPress={onPressAC}>AC</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bigButton}>

            </TouchableOpacity>

             <TouchableOpacity style={styles.button}>
                <Text style={styles.fontKey}>/</Text>
             </TouchableOpacity>

        </View>

        <View style={styles.panel}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.fontKey} onPress={onPress1}>1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.fontKey}>2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                                             <Text style={styles.fontKey}>3</Text>
                    </TouchableOpacity>

                     <TouchableOpacity style={styles.button}>
                        <Text style={styles.fontKey}>*</Text>
                     </TouchableOpacity>

         </View>

         <View style={styles.panel}>
                             <TouchableOpacity style={styles.button}>
                                 <Text style={styles.fontKey}>4</Text>
                             </TouchableOpacity>

                             <TouchableOpacity style={styles.button}>
                                 <Text style={styles.fontKey}>5</Text>
                             </TouchableOpacity>

                             <TouchableOpacity style={styles.button}>
                                                      <Text style={styles.fontKey}>6</Text>
                             </TouchableOpacity>

                              <TouchableOpacity style={styles.button}>
                                 <Text style={styles.fontKey}>+</Text>
                              </TouchableOpacity>

          </View>

         <View style={styles.panel}>
                     <TouchableOpacity style={styles.button}>
                         <Text style={styles.fontKey}>7</Text>
                     </TouchableOpacity>

                     <TouchableOpacity style={styles.button}>
                         <Text style={styles.fontKey}>8</Text>
                     </TouchableOpacity>

                     <TouchableOpacity style={styles.button}>
                                              <Text style={styles.fontKey}>9</Text>
                     </TouchableOpacity>

                      <TouchableOpacity style={styles.button}>
                         <Text style={styles.fontKey}>-</Text>
                      </TouchableOpacity>

          </View>

          <View style={styles.panel}>
                      <TouchableOpacity style={styles.bigButton}>
                          <Text style={styles.fontKey}>0</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.button}>
                          <Text style={styles.fontKey}>,</Text>
                      </TouchableOpacity>



                       <TouchableOpacity style={styles.button}>
                          <Text style={styles.fontKey}>=</Text>
                       </TouchableOpacity>

           </View>

      </View>
    );
};

export default Call;

