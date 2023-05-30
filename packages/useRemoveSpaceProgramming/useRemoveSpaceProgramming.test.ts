import { renderHook } from '@testing-library/react'
import { useRemoveSpaceProgramming } from './useRemoveSpaceProgramming';
import { describe, expect, it } from 'vitest';
import { snakeCase } from 'lodash'

describe('useRemoveSpaceProgramming hook', () => {
  it('객체의 키를 카멜케이스로 변경한다.', () => {
    const { result } = renderHook(() => useRemoveSpaceProgramming({
      camel_case: 'camelCase',
      snake_case: 'snake_case',
      PascalCase: 'PascalCase',
      'kebab-case': 'kebab-case',
      depth_test: {
        test_1: 'test',
        test_2: 'test2',
        test_3: 'test3'
      }
    }));
    expect(result.current[0]).toStrictEqual({
      camelCase: 'camelCase',
      snakeCase: 'snake_case',
      pascalCase: 'PascalCase',
      kebabCase: 'kebab-case',
      depthTest: {
        test1: 'test',
        test2: 'test2',
        test3: 'test3'
      }
    });
  });

  it('이런데이터도 가능할까?', () => {
    const { result } = renderHook(() => useRemoveSpaceProgramming({
      "siteCode": "S20210810b3d249e9bb1e8",
      "unitCode": "u20210810611211bd954ec",
      "orderCode": "o20230529570412811d67e",
      "orderNo": 202305297039815,
      "receiverName": "",
      "typeCd": "원주문(최초주문)",
      "statusCd": "OPEN(거래개시)",
      "currency": "KRW",
      "orderPrice": "2509.5000",
      "itemPrice": "0.0000",
      "deliveryPrice": "0.0000",
      "itemDiscount": "0.0000",
      "couponDiscount": "0.0000",
      "taxPrice": "0.0000",
      "paidPrice": "0.0000",
      "cancelPrice": "0.0000",
      "refundPrice": "0.0000",
      "ordererEmail": "test@imweb.me",
      "ordererCall": "010-2324-2341",
      "ordererName": "관리자",
      "receiverCall": "",
      "zipcode": "",
      "addr1": "",
      "addr2": null,
      "city": null,
      "state": null,
      "country": null,
      "countryName": null,
      "deviceCd": "DTA01",
      "wtime": "2023-05-29T16:15:54.000Z",
      "mtime": "2023-05-29T16:15:54.000Z",
      "orderSectionList": [
          {
              "siteCode": "S20210810b3d249e9bb1e8",
              "orderSectionCode": "os202305292ac1060726e0f",
              "orderSectionNo": "2023",
              "orderCode": "o20230529570412811d67e",
              "statusCd": "OSS01",
              "invoiceCode": null,
              "cancelOrderCode": null,
              "isDel": "N",
              "mtime": "2023-05-29T16:15:54.000Z",
              "orderSectionItemList": [
                  {
                      "orderSectionItemCode": "si20230529e8f7ecdd55ee0",
                      "orderSectionCode": "os202305292ac1060726e0f",
                      "orderItemCode": "oi202305291d39695381f15",
                      "qty": 1,
                      "discountPrice": "0.0000",
                      "couponPrice": "0.0000",
                      "usePoint": "0.0000",
                      "isRestock": "Y",
                      "shippingPlaceCode": "",
                      "skuCode": "string",
                      "prodCode": "s202210189970d82d8c5b6",
                      "prodName": "",
                      "weight": "0.0000",
                      "price": "0.0000",
                      "givePoint": "0.0000",
                      "isRequireOption": "N",
                      "optionNameCode": "string",
                      "optionValueCode": "string",
                      "optionName": null,
                      "optionValue": null,
                      "prodSkuNo": "string",
                      "optionSkuNo": "string",
                      "imageUrlList": [
                          "S20210810b3d249e9bb1e8/06f2e5521d571.jpg"
                      ],
                      "orderCode": "o20230529570412811d67e"
                  }
              ]
          }
      ]
    }, snakeCase));
    expect(result.current[0]).toStrictEqual({
      "site_code": "S20210810b3d249e9bb1e8",
      "unit_code": "u20210810611211bd954ec",
      "order_code": "o20230529570412811d67e",
      "order_no": 202305297039815,
      "receiver_name": "",
      "type_cd": "원주문(최초주문)",
      "status_cd": "OPEN(거래개시)",
      "currency": "KRW",
      "order_price": "2509.5000",
      "item_price": "0.0000",
      "delivery_price": "0.0000",
      "item_discount": "0.0000",
      "coupon_discount": "0.0000",
      "tax_price": "0.0000",
      "paid_price": "0.0000",
      "cancel_price": "0.0000",
      "refund_price": "0.0000",
      "orderer_email": "test@imweb.me",
      "orderer_call": "010-2324-2341",
      "orderer_name": "관리자",
      "receiver_call": "",
      "zipcode": "",
      "addr_1": "",
      "addr_2": null,
      "city": null,
      "state": null,
      "country": null,
      "country_name": null,
      "device_cd": "DTA01",
      "wtime": "2023-05-29T16:15:54.000Z",
      "mtime": "2023-05-29T16:15:54.000Z",
      "order_section_list": [
          {
              "siteCode": "S20210810b3d249e9bb1e8",
              "orderSectionCode": "os202305292ac1060726e0f",
              "orderSectionNo": "2023",
              "orderCode": "o20230529570412811d67e",
              "statusCd": "OSS01",
              "invoiceCode": null,
              "cancelOrderCode": null,
              "isDel": "N",
              "mtime": "2023-05-29T16:15:54.000Z",
              "orderSectionItemList": [
                  {
                      "orderSectionItemCode": "si20230529e8f7ecdd55ee0",
                      "orderSectionCode": "os202305292ac1060726e0f",
                      "orderItemCode": "oi202305291d39695381f15",
                      "qty": 1,
                      "discountPrice": "0.0000",
                      "couponPrice": "0.0000",
                      "usePoint": "0.0000",
                      "isRestock": "Y",
                      "shippingPlaceCode": "",
                      "skuCode": "string",
                      "prodCode": "s202210189970d82d8c5b6",
                      "prodName": "",
                      "weight": "0.0000",
                      "price": "0.0000",
                      "givePoint": "0.0000",
                      "isRequireOption": "N",
                      "optionNameCode": "string",
                      "optionValueCode": "string",
                      "optionName": null,
                      "optionValue": null,
                      "prodSkuNo": "string",
                      "optionSkuNo": "string",
                      "imageUrlList": [
                          "S20210810b3d249e9bb1e8/06f2e5521d571.jpg"
                      ],
                      "orderCode": "o20230529570412811d67e"
                  }
              ]
          }
      ]
  });
  });
});