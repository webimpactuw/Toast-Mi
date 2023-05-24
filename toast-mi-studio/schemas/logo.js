import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'logo',
    title: 'Header Logo',
    type: 'document',
    _type: 'logo',
    fields: [
        defineField({
            name: 'logo',
            title: 'Logo image',
            type: 'image',
            options: {
                hotspot: true,
            },
        })
    ],
})
