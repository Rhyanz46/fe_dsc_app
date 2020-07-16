export function change_state(current_component, key, value){
    current_component[key] = value
}

export function get_year_list_between(start, end){
    start = new Date(`01/01/${start}`);
    end = new Date(`01/01/${end}`);
    var newend = end.setDate(end.getDate()+1);
    end = new Date(newend);
    let result = []
    while(start < end){
        result.push(start.getFullYear())
        // var newDate = start.setDate(start.getDate() + 1);
        var newDate = start.setFullYear(start.getFullYear() + 1);
        start = new Date(newDate);
    }
    return result;
}