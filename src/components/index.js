import TableList from './TableList/index'
import Pagination from './Pagination'
import DictSelect from './DictSelect/DictSelect'
import DictCascader from './DictSelect/DictCascader'
import DictCascaderArea from './DictSelect/DictCascaderArea'
import CancelModal from './Cancel/index'
import ConfirmModal from './Confirm/index'

export default {
  install: Vue => {
    Vue.component(TableList.name, TableList)
    Vue.component(Pagination.name, Pagination)
    Vue.component(DictSelect.name, DictSelect)
    Vue.component(DictCascader.name, DictCascader)
    Vue.component(DictCascaderArea.name, DictCascaderArea)
    Vue.prototype.cancelModal = CancelModal
    Vue.prototype.confirmModal = ConfirmModal
  }
}
