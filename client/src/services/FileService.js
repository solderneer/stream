import axios from 'axios'

export default {
    getfilelist: async function () {
        let res = await axios.get('https://streamfiles.solderneer.me')

        // Extracting list
        let container = document.createElement('html')
        container.innerHTML = res.data
        let nodelist = [...container.getElementsByTagName('a')]

        return nodelist.map(function (elem) {
            let string = elem.innerText
            return string.slice(0, -1);
        })
    },
}
