// composables/useDatetimeLocal.ts
export function useDatetimeLocal() {
  /**
   * 將 ISO 8601 UTC 字串轉成符合 <input type="datetime-local"> 的本地時間格式 "YYYY-MM-DDTHH:mm"
   */
  function toLocalDatetimeString(isoString: string | null | undefined): string {
    if (!isoString) return ""
    const date = new Date(isoString)
    // 取得時區偏移，單位是分鐘，轉成毫秒
    const tzOffset = date.getTimezoneOffset() * 60000
    const localISO = new Date(date.getTime() - tzOffset).toISOString()
    return localISO.slice(0, 16)
  }

  /**
   * 將 datetime-local 格式的字串轉回 ISO 8601 格式的 UTC 字串
   */
  function toISOStringWithLocalOffset(datetimeLocal: string): string {
    if (!datetimeLocal) return ""
    const date = new Date(datetimeLocal)
    return date.toISOString()
  }

  return {
    toLocalDatetimeString,
    toISOStringWithLocalOffset,
  }
}
