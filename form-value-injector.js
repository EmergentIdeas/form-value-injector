
const inputInjector = require('input-value-injector')
const textareaInjector = require('textarea-value-injector')
const selectInjector = require('select-value-injector')

let injectValues = function(text, values) {
	
	let result = inputInjector(text, values)
	result = textareaInjector(result, values)
	result = selectInjector(result, values)
	
	
	return result
}
