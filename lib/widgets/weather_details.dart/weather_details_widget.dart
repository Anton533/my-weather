import 'package:flutter/material.dart';
import 'package:my_weather/widgets/weather_details.dart/weather_model.dart';

import '../../provider.dart';

class WeatherDetailsWidget extends StatelessWidget {
  const WeatherDetailsWidget({super.key});

  @override
  Widget build(BuildContext context) {
    final model = NotifierProvider.watch<WeatherModel>(context);
    final tempC = model.currentWeather?.tempC;
    final windKph = model.currentWeather?.windKph;
    final feelslikeC = model.currentWeather?.feelslikeC;
    final lastUpdated = model.currentWeather?.lastUpdated;

    const textStyle = TextStyle(fontSize: 19);
    return Scaffold(
      appBar: AppBar(
        title: const Text('Current Weather'),
      ),
      body: ListView(
        children: [
          Column(
            children: [
              const Text(
                '''
          "location": 
            "name": "Kulynychi",
            "region": "Kharkivs'ka Oblast'",
            "country": "Ukraine",
            "localtime": "2022-12-18 16:26"
            ''',
                style: textStyle,
              ),
              const SizedBox(height: 30),
              Text(
                '''
          "current":
          "last_updated": $lastUpdated,
          "temp_c": $tempC,
          "wind_kph": $windKph,
          "feelslike_c": $feelslikeC,
            ''',
                style: textStyle,
              ),
            ],
          ),
        ],
      ),
    );
  }
}
