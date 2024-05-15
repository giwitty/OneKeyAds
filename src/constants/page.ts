import type { Nullable } from '@dolphin-admin/utils'

import type { Sorter } from '@/api/axios.type'

export const DEFAULT_PAGE_SIZE = 10

/**
 * 分页模型
 * @description 用于分页查询的基本参数
 */
export class BasePageModel {
  /**
   * 当前页码
   */
  page: number

  /**
   * 每页条数
   */
  pageSize: number

  /**
   * 搜索文本
   */
  keywords?: string

  /**
   * 开始日期
   */
  startTime?: Nullable<string>

  /**
   * 结束日期
   */
  endTime?: Nullable<string>

  /**
   * 排序关键字
   * @description 以逗号分隔
   */
  sort?: string

  /**
   * 排序顺序
   * @description 以逗号分隔
   */
  order?: string

  /**
   * 排序器
   */
  sorters?: Sorter[]

  constructor(basePageModel?: BasePageModel) {
    const { page, pageSize, keywords, startTime, endTime, sorters } = basePageModel ?? {}
    this.page = page ?? 1
    this.pageSize = pageSize ?? DEFAULT_PAGE_SIZE
    if (keywords) {
      this.keywords = keywords
    }
    if (startTime) {
      this.startTime = startTime
    }
    if (endTime) {
      this.endTime = endTime
    }
    if (sorters && Array.isArray(sorters) && sorters.length > 0) {
      const sorterKeys = sorters.map((sorter) => sorter.key)
      this.sort = sorterKeys.join()
      const sorterOrders = sorters.map((sorter) => sorter.order)
      this.order = sorterOrders.join()
    }
  }
}
