import { useHistory, Link } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext'
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {
    const history = useHistory();
    const {state, dispatch} = useForm();
    
    useEffect(() => {
        if(state.name === ''){
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
    }, []);

    const handleNextStep = () => {
        if(state.email !== '' && state.github !== ''){
            console.log(state);
        } else {
            alert('preencha os dados')
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }
    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container>   
                <p>Passo 3/3</p>
                <h1>{state.name}, e onde te achamos?</h1>
                <p>Preencha o campo abaixo</p>
                <hr/>
                <label>
                    Seu E-mail:
                    <input 
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    /> 
                </label>
                <label>
                    Seu Github:
                    <input 
                        type="url"
                        value={state.github}
                        onChange={handleGithubChange}
                    /> 
                </label>
                
                <Link to="/step2" className="backButton">Voltar</Link>
                <button onClick={handleNextStep} >Finalizar</button>
            </C.Container>
        </Theme>
        
    )
}