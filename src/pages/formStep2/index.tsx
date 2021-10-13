import { useHistory, Link } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext'
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../components/SelectOptions';

export const FormStep2 = () => {
    const history = useHistory();
    const {state, dispatch} = useForm();
    
    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2
        });
    }, []);

    const handleNextStep = () => {
        if(state.name !== ''){
            history.push('/step3');
        } else {
            alert("preencha o nome")
        }
    }
    
    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

    return (
        <Theme>
            <C.Container>   
                <p>Passo 2/3</p>
                <h1>{state.name}, qual frase define vc?</h1>
                <p>Escolha um campo abaixo</p>
                <hr/>
                <SelectOption 
                    title='Iniciante'
                    description='Menos de um ano de carreira'
                    icon='😁'
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />
                <SelectOption 
                    title='Sou Top'
                    description='Tenho dois anos ou mais de carreira'
                    icon="😎"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />           
                
                <Link to="/" className="backButton">Voltar</Link>
                <button onClick={handleNextStep} >Proximo</button>
            </C.Container>
        </Theme>
    )
}