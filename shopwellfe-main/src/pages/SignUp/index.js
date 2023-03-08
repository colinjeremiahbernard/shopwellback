import 
React,
 { 
    useState,
    useEffect
 } 
 from "react";
import { PageArea } from './styled'
import { PageContainer,
         PageTitle,
         ErrorMessage } from "../../components/MainComponents";
import { doLogin } from '../../helpers/AuthHandler'
import useApi from '../../helpers/shopAPI'

const Page = () => {
    const api = useApi();
    
    const [name, setName] = useState('');
    const [stateLoc, setStateLoc] = useState('');
    const [stateList, setStateList] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getStates = async () => {
            const sList = await api.getStates();
            setStateList(sList);
        }
        getStates();
    },[])

    const handleSubmit = async(e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setDisabled(false);
            return;
        }
        const json = await api.register(
            name,
            stateLoc,
            email,
            password
             );
        if (json.error) {
            setError(json.error);
        } else {
            doLogin(json.token);
            window.location.href = '/';
        }
        setDisabled(false);
    }

    return (
        <PageContainer> 
            <PageTitle> Cadastro </PageTitle>
            <PageArea>
                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                } 
                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title"> 
                        Nome Completo
                        </div>
                        <div className="area--input">
                            <input
                             type='text'
                             disabled = { disabled }
                             value = {name}
                             onChange = {e => setName(e.target.value)}
                             required
                             />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"> 
                        Estado 
                        </div>
                        <div className="area--input">
                            <select
                             disabled = { disabled }
                             value = {stateLoc}
                             onChange = {e => setStateLoc(e.target.value)}
                             required
                             > 
                             <option> </option>
                             {stateList.map((i, k) => 
                              <option
                               key={k}
                               value = {i.id}
                               > 
                               {i.name}

                              </option>
                             )}
                             </select>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">
                           Email
                        </div>
                        <div className="area--input">
                            <input
                             type='email'
                             disabled = { disabled }
                             value = {email}
                             onChange = {e => setEmail(e.target.value)}
                             required
                             />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">
                           Senha
                        </div>
                        <div className="area--input">
                            <input 
                             type='password'
                             disabled = { disabled }
                             value = { password } 
                             onChange={e => setConfirmPassword(e.target.value)}
                             required
                             />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">
                          Confirmar a Senha
                        </div>
                        <div className="area--input">
                            <input 
                             type='password'
                             disabled = { disabled }
                             value = { confirmPassword } 
                             onChange={e => setConfirmPassword(e.target.value)}
                             required
                             />
                        </div>
                    </label>
                    
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={ disabled }>Fazer Cadastro</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    )
}
export default Page