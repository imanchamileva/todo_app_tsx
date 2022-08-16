import { Input } from '../atoms/Input'
import { Title } from '../atoms/Title';


export const DefaultPage = () => {

    return (
        <section className="h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <Title />
            <Input />
        </section>
    )
}

