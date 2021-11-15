import { Table, Column, Model, HasMany } from 'sequelize-typescript'

@Table
export default class Admin extends Model {
    @Column
    name: string
}