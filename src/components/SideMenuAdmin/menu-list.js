import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import NextWeekOutlinedIcon from '@mui/icons-material/NextWeekOutlined'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import paths from '../../constants/paths'

const listLinks = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.Order,
    icon: NextWeekOutlinedIcon
  },
  {
    id: 2,
    label: 'Listar Produtos',
    link: paths.ListProducts,
    icon: ShoppingCartIcon
  },
  {
    id: 3,
    label: 'Novo Produto',
    link: paths.NewProduct,
    icon: AddShoppingCartIcon
  }
]

export default listLinks
