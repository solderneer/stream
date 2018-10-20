import axios from 'axios'

export default {
    getfilelist: async function () {
        let res = await axios.get('http://localhost:1000/')

        // Extracting list
        let container = document.createElement('html')
        container.innerHTML = res.data
        let nodelist = [...container.getElementsByTagName('a')]

        return nodelist.map(function (elem) {
            return elem.innerText
        })
    },
}