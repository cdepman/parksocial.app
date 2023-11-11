import MailchimpSubscribe from "react-mailchimp-subscribe";

const url =
  "https://depman.us21.list-manage.com/subscribe/post?u=5f0b266610ace2a600669dada&amp;id=8d323b6170&amp;f_id=0038e9e6f0";

export const SubscribeForm = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
        {status === "sending" && (
          <div style={{ color: "blue" }}>sending...</div>
        )}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div style={{ color: "green" }}>Subscribed !</div>
        )}
      </div>
    )}
  />
);
