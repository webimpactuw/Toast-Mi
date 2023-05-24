import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'home',
    title: 'Home Page',
    type: 'document',
    _type: 'home',
    fields: [
        defineField({
            name: 'homeInfo',
            title: 'Home Info',
            type: 'text',
        }),
    ],
})
