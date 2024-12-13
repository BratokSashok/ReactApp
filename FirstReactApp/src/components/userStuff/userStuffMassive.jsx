const users = [
    {id: "1", name: "John"},
    {id: "2", name: "Kate"},
    {id: "3", name: "Anne"},
]

const usernamesById = users.reduce(function (result, user) {
    return{
        ...result,
        [user.id]: user.name,
    }
}, {})
// { '1': "John", '2': "Kate", '3': "Anne"}