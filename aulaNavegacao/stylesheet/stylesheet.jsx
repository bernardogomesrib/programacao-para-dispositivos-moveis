import { StyleSheet } from 'react-native';
const values = {
    primaryColor: '#1670f7',
    secondaryColor: '#ff1616',
    textColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    borderColor: '#000000',
    height: 35,
    Width: '80%',
    buttonPadding:5,
    inputBg:'#f2f2f2'
}
const styles = StyleSheet.create({
    bt: {
        backgroundColor: values.primaryColor,
        color: values.textColor,
        padding: values.buttonPadding,
        borderRadius: values.borderRadius,
        width:values.Width,
        alignSelf:'center',
        alignItems:'center',
        
    },
    bt2: {
        backgroundColor: values.secondaryColor,
        color: values.textColor,
        padding: values.buttonPadding,
        borderRadius: values.borderRadius,
        width:values.Width,
        alignSelf:'center',
        alignItems:'center',
        
    },
    bt3:{
        color: values.textColor,
        padding: values.buttonPadding,
        borderRadius: values.borderRadius,
    },
    input: {
        padding: values.padding,
        borderColor: values.borderColor,
        borderWidth: 1,
        height: values.height,
        width:values.Width,
        backgroundColor:values.inputBg,
    },
    textStyle:{
        color: '#FFFFFF',
        fontSize: 16,
    },
    icon:{
        
        overflow: 'hidden'
    },
    label:{
        width:"80%",
        fontSize:16,
        alignItems:'flex-start'
    },
    
    txtStyle:{
        fontSize:25,
        width:"80%",
        fontWeight:'bold'
    }
});

export { styles };

