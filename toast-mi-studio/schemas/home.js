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
        defineField({
            name: 'image1',
            title: 'Green Lake Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'image2',
            title: 'Tacoma Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'drinks',
            title: 'Drink Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'bahnmi',
            title: 'Bahn Mi Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'plate',
            title: 'Plate Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        })
    ],
})
