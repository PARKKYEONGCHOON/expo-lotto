import React, { useCallback, useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createNewNumbers } from '../actions/lottoNumbers';
import { Button } from '../components/Button';
import { Header } from '../components/Header/Header';
import { LottoNumberView } from '../components/LottoNumberView';
import { Spacer } from '../components/Spacer';
import { Typography } from '../components/Typography';
import { getRandomSixNumber } from '../utils/Utils';

export const HomeScreens = (props) => {

    //const [numbers] = useState([]);

    const numbers = useSelector((state)=> state.numbers.currentNumber)

    const dispatch = useDispatch();

    const onPressgetNumber = useCallback (() =>{
        
        dispatch(createNewNumbers());

    },[])

    

    return (
        <SafeAreaView style={{flex:1}}>
            <Header.Title title='HOME'></Header.Title>

            <View style={{flex:1, flexDirection:'column' ,alignItems:'center', justifyContent:'center', paddingHorizontal: 12 }}>
                <View style={{
                    height:250,
                    flexDirection:'colum',
                    paddingHorizontal:24,
                    
                    backgroundColor: "white",
                    borderColor: 'gray'
                }}>
                    
                    {numbers.length === 6 && (
                        <LottoNumberView numbers={numbers}/>
                    )}

                    
                </View>

                <Spacer space={20} />

                <Button onPress={onPressgetNumber}>
                    <View style={{backgroundColor:'black', paddingVertical:24, alignItems:'center'}}>
                        <Typography color='white'>로또 번호 추출하기</Typography>

                    </View>
                </Button>

                
            </View>

        </SafeAreaView>
    )
}