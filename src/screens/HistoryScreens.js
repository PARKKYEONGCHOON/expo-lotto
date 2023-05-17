import React, { useState, useCallback } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';

import { Header } from '../components/Header/Header'
import { LottoNumberView } from '../components/LottoNumberView';
import { Typography } from '../components/Typography';
import { useSelector } from 'react-redux';

export const HistoryListScreen = (props) => {

    // const [history] = useState([
    //     {date: new Date(), numbers: [1,2,3,4,5,6]},
    //     {date: new Date(), numbers: [1,2,3,4,5,6]},
    //     {date: new Date(), numbers: [1,2,3,4,5,6]},
    //     {date: new Date(), numbers: [1,2,3,4,5,6]},
    //     {date: new Date(), numbers: [1,2,3,4,5,6]},
    //     {date: new Date(), numbers: [1,2,3,4,5,6]}
    // ]);

    const history = useSelector((state)=> state.numbers.history);

    const getNumberBackgroundColor = useCallback (() => {
        const randomNumber = Math.floor(Math.random() * 10) % 6;

        if(randomNumber === 0){
            return 'red';
        }

        if(randomNumber === 1) { return 'blue' }

        if(randomNumber === 2) { return 'gray' }

        if(randomNumber === 3) { return 'green' }

        if(randomNumber === 4) { return 'purple' }

        



        return 'black';
    }, [])

    return (
        <SafeAreaView style={{flex:1}}>
            <Header.Title title='HISTORY'>

            </Header.Title>

            <FlatList 
                style={{flex:1}} 
                data={history}
                contentContainerStyle={{
                    paddingTop:24,
                    paddingBottom:24,
                }}
                renderItem={({item}) => {
                    return (
                        <View style={{
                            paddingHorizontal:20, 
                            paddingVertical:12, 
                            marginHorizontal:24, 
                            height: 120, 
                            backgroundColor: 'white'
                        }}>
                            <Typography fontSize={16}>
                                {item.date.getFullYear()},
                                {item.date.getMonth()},
                                {item.date.getDay()}
                            </Typography>
                            <LottoNumberView numbers={item.numbers}></LottoNumberView>
                        </View>
                    )
                }}
            />
            
            

        </SafeAreaView>

        
    )
}