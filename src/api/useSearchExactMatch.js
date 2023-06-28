export const handleSearchValExactMatch = (searchVal, data) => {
  const tempData = data
  const searchData = tempData
  const regex = new RegExp(`^${searchVal}$`, 'i')
  const result = searchData.filter((item) => {
    return regex.test(item['VM名稱']) || regex.test(item['VM IP']) || regex.test(item['開關機狀態']) || regex.test(item['VM所在平台']) || regex.test(item['VM附註']) || regex.test(item['OS版本'])
  })
  return result
}