import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import  { useRef} from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props {
    OnSearch: (searchText: string) => void
}

export const SearchInput = ({ OnSearch }: Props) => {
    const ref = useRef<HTMLInputElement>(null)

        
    // يُنفّذ هذا الكود مرة واحدة عند تحميل المُكوّن 

    return (
        <form style={{ width: '100%' }} onSubmit={(event) => {
            event.preventDefault()
            if (ref.current) {
                OnSearch(ref.current.value) // سيتم تنفيذ هذا بعد رسم العنصر
            }
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input ref={ref} borderRadius={20} placeholder='Search game..' variant='filled'></Input>
            </InputGroup>
        </form>
    )
}

