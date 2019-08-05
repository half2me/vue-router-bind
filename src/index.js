const mapRouter = (routerKey, props) =>
  Object.fromEntries(
    props.map(p => [
      p,
      {
        get() {
          return this.$route[routerKey][p];
        },
        set(val) {
          this.$router.push({
            [routerKey]: { ...this.$route[routerKey], [p]: val }
          });
        }
      }
    ])
  );

export const mapRouterQuery = p => mapRouter("query", p);
export const mapRouterHash = p => mapRouter("hash", p);
export const mapRouterParams = p => mapRouter("params", p);
