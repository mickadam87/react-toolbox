# MIKADAM REACT TOOLBOX

##A set of useFull tools to not rebuild the wheel everytime your start a new project.

#### Tools list:

- useGlobalContext:

In this hook, you can extract a Context object for managing UserContext and ThemeContext.
UserContext({user,setUser,auth,setAuth})
ThemeContext({...toBeContinued})

- useWebSocket:

Ping and pingPong functions are intercepted requests, so, your backend need to be configured with a "JsonWebToken validation with authentication ("auth" event with data object: { token: "yourAccessJWT" }) and refreshing handlers ("refresh" event with data object: { refresh: "yourRefreshJWT" }). In the front end side, access token is stored in LocalStorage with title "access_token" and refresh token with title "refresh_token".

```javascript
import { useWebSocket } from "@mikadam/toolbox";

export default function YourComponent(props) {
  const { listen, ping, pingPong } = useWebSocket({
    url: "yourwebsocketserverurl",
  });

  useEffect(() => {
    listen("yourEvent", (data) => {
      // Data handling here.
    });

    return () => null;
  }, []);

  const submittingDataWaitingReply = () =>
    pingPong(
      "submitEvent",
      { dataToSend: "noMatterFormatYouUse (JSON, string, number)" },
      (reply) => {
        // Reply handling here...
      }
    );

  const simplyEmitData = () =>
    ping("yourEventTitle", {
      dataToSend: "noMatterFormatYouUse (JSON, string, number)",
    });

  return (
    <>
      <Button onPress={() => submittingDataWaitingReply()} />
    </>
  );
}
```

- useHTTP:

An hook with intercepted requests.
Access token is send in headers: { "Authorization":"Bearer YoUrToKeN" }
RefreshToken is check at "/token" path on the authServer. Server request must be like: {access:"generatedAccessToken"}

```javascript
// inside your component...

const { get, post, put, del } = useHTTP({
  serverURL: "yourHTTPserverurl",
  authServerURL: "yourauthserverurl",
});

const submit = async (data) => {
  try {
    const request = await post("/login", { ...data });

    if (request.error) {
      throw Error(request.error || "your error message");
    }

    // Handling request object here...
  } catch (e) {
    // Handling error here...
  }
};
```
