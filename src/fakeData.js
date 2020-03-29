export let items = [
    {
        id: '123',
        text: 'Lorem ipsum dolor sit amet',
        description: 'Curabitur sed rutrum risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. '
    },
    {
        id: '124',
        text: 'Sed ultricies eros maximus risus lobortis',
        description: 'Nam fringilla feugiat libero ac hendrerit. Fusce bibendum, ante vitae pellentesque rutrum, ligula quam condimentum arcu, non mollis quam augue id metus. '
    },
    {
        id: '125',
        text: 'Nullam auctor turpis vel purus fermentum molestie',
        description: 'Mauris luctus, quam vitae egestas maximus, quam nisl gravida dui, vestibulum bibendum ex odio id justo. Aliquam suscipit congue rhoncus.'
    },
    {
        id: '126',
        text: 'Mauris semper eros ligula, eget ornare erat suscipit id',
        description: 'Fusce auctor, risus bibendum congue sodales, ex augue laoreet dui, eget consequat enim dui vitae sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    },
    {
        id: '127',
        text: 'Integer id tellus a odio varius porta ut ac erat',
        description: 'Donec pharetra id eros ac aliquam. Etiam aliquet congue ipsum, sed ultrices turpis semper aliquam. Donec dignissim velit orci, sit amet congue mauris porttitor a.'
    },
    {
        id: '128',
        text: 'Integer rhoncus lectus eget fermentum ornare',
        description: 'Nam malesuada imperdiet nisi. Proin laoreet ornare nibh sed viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin vitae sagittis odio.'
    },
];

export const updateItems = ({id, text, description}) => {
    const newItems = JSON.parse(JSON.stringify(items));
    newItems.forEach(item => {
        if (item.id === id) {
            item.text = text;
            item.description = description;
        }
    });
    items = newItems;
};
