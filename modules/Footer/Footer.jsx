import React from "react";
import Footer from "rc-footer";
import "rc-footer/assets/index.css";

export default function App() {
  return (
    <div>
      <Footer
        maxColumnsPerRow={4}
        columns={[
          {
            title: "COMPANY NAME",
            items: [
              {
                title: "Ant Design Pro",
                url: "https://pro.ant.design/",
                openExternal: true,
              },
              {
                title: "Ant Design Mobile",
                url: "https://mobile.ant.design/",
                openExternal: true,
              },
              {
                title: "Kitchen",
                url: "https://kitchen.alipay.com/",
                description: "DESCRIPTION",
              },
            ],
          },
          {
            title: "PRODUCTS",
            items: [
              {
                title: "Ant Design Pro",
                url: "https://pro.ant.design/",
                openExternal: true,
              },
              {
                title: "Ant Design Mobile",
                url: "https://mobile.ant.design/",
                openExternal: true,
              },
              {
                title: "Kitchen",
                url: "https://kitchen.alipay.com/",
                description: "DESCRIPTION",
              },
            ],
          },
          {
            title: "USEFUL LINKS",
            items: [
              {
                title: "Ant Design Pro",
                url: "https://pro.ant.design/",
                openExternal: true,
              },
              {
                title: "Ant Design Mobile",
                url: "https://mobile.ant.design/",
                openExternal: true,
              },
              {
                title: "Kitchen",
                url: "https://kitchen.alipay.com/",
                description: "DESCRIPTION",
              },
            ],
          },
          {
            icon: (
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
                alt="more products"
              />
            ),
            title: "ABOUT",
            items: [
              {
                icon: (
                  <img
                    src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
                    alt="yuque"
                  />
                ),
                title: "CONTACT",
                url: "https://yuque.com",
                description: "DESCRIPTION",
                openExternal: true,
              },
              {
                icon: (
                  <img
                    src="https://gw.alipayobjects.com/zos/rmsportal/uHocHZfNWZOdsRUonZNr.png"
                    alt="yuque"
                  />
                ),
                title: "SOMETHING",
                url: "https://yunfengdie.com",
                description: "DESCRIPTION",
                openExternal: true,
              },
            ],
          },
        ]}
      />
    </div>
  );
}
