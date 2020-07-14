export let PORT = ':1110'
export let BASE_URL = window.location.protocol + "//" + window.location.hostname + PORT

export let USER = '/user'
export let LOGIN = '/user/login'
export let STACK_KABUPATEN = '/stack/kabupaten'
export let STACK_SUPERVISOR = '/stack/supervisor'
export let STACK_KECAMATAN = '/stack/kecamatan'
export let STACK_SALESFORCE = '/stack/salesforce'

export let MY_OUTLET_TARGET = '/stack/outlet/target'
export let OUTLET_TARGET = (outlet_id) => {
    return `/stack/outlet/${outlet_id}/target`
}
export let REPORT = '/data/report'
export let REPORT_KABUPATEN_NGRS_PERFORMANCE = '/report/NGRS/kabupaten/performance'