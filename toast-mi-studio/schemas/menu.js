import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'menu',
    title: 'Menu Page',
    type: 'document',
    _type: 'menu',
    fields: [
        defineField({
            name: 'bahnmiMenu',
            title: 'Bahn Mi ',
            type: 'text',
        }),
        defineField({
            name: 'bowlMenu',
            title: 'Rice and Salad Bowl',
            type: 'text',
        }),
        defineField({
            name: 'drinksMenu',
            title: 'Drinks',
            type: 'text',
        }),
    ],
})
