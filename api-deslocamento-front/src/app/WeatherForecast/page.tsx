"use client";
import ListOfWeatherForecast from "@/components/WeatherForecast/ListWeatherForecast";
import RootProvider from "@/context/RootProvider";

const WeatherForecast = () => {
  <main className="flex min-h-screen flex-col items-center pl-5 pr-5 pt-5 vw-full sm:w-screen">
    <div className="z-10 w-full max-w-full items-center justify-between text-sm flex flex-col md:flex-row">
      <RootProvider>
        <ListOfWeatherForecast />
      </RootProvider>
    </div>
  </main>;
};

export default WeatherForecast;
