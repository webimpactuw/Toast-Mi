import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'menu',
    title: 'Menu Page',
    type: 'document',
    _type: 'menu',
    fields: [
        defineField({
            name: 'bahnmiMenu',
            title: 'Bahn Mi',
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
        defineField({
            name: 'image1',
            title: 'Image 1',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'image2',
            title: 'Image 2',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'image3',
            title: 'Image 3',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'image4',
            title: 'Image 4',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'image5',
            title: 'Image 5',
            type: 'image',
            options: {
                hotspot: true,
            },
        })
    ],
})
