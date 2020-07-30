import { uuid } from 'uuidv4'

export class User {

    public readonly id: string

    public name: string
    public email: string
    public password: string

    // Receber todos os atributos de User, menos o id
    // id é opcional
    constructor(props: Omit<User, 'id'>, id?: string) {

        // Atribui os atributos um por um
        Object.assign(this, props)

        // Gera o id único
        if (!id) {
            this.id = uuid()
        }
    }
}