const TwoGrid = () => {
  return (
    <div className="space-y-4 flex items-center justify-center">
      {/* First Grid */}
      <div className="grid grid-cols-2 gap-4 ">
        <div>
          <div className="col-span-1 bg-blue-700 m-2 w-3/10 p-4  rounded-xl">
            <h1>
              Buy crypto Trade BTC, ETH, and other crypto easily via bank
              transfer.
            </h1>
          </div>
          <div className="col-span-1 bg-blue-500 m-2 w-7/10 p-4  rounded-xl">
            <div>
              <h1>
                Price Alerts Be notified on BTC, ETH, XRP prices, and more.
              </h1>
              <ul className="li">bit</ul>
              <ul className="li">az</ul>
              <ul className="li">az</ul>
              <ul className="li">aze</ul>
              <ul className="li">aze</ul>
            </div>
          </div>
        </div>

        <div>
          <div className="col-span-1 bg-blue-500 m-2 w-3/10 p-4 rounded-xl">aze</div>
          <div className="col-span-1 bg-blue-500 m-2 w-7/10 p-4 rounded-xl">aze</div>
        </div>
      </div>
    </div>
  );
};

export default TwoGrid;
