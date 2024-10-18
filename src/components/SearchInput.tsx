import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import  { useRef} from 'react'
import { BsSearch } from 'react-icons/bs'
import useStoreGame from '../store'


export const SearchInput = () => {
    const ref = useRef<HTMLInputElement>(null)
    const setSearchText = useStoreGame(s => s.setSearchText)
        
    
    return (
        <form style={{ width: '100%' }} onSubmit={(event) => {
            event.preventDefault();
            if (ref.current) {
                setSearchText(ref.current.value) 
            }
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input ref={ref} borderRadius={20} placeholder='Search game..' variant='filled'></Input>
            </InputGroup>
        </form>
    )
}

