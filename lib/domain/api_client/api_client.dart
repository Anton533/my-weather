import 'dart:convert';
import 'dart:io';

import '../entity/current_response.dart';

class ApiClient {
  final _client = HttpClient();
  static const _host = 'http://api.weatherapi.com/v1';
  static const _apiKey = '7d4159f3e5df42e190b172829221512';

// 'http://api.weatherapi.com/v1'+'/current.json'

  Uri _makeUri(String path, [Map<String, dynamic>? queryParameters]) {
    final uri = Uri.parse('$_host$path');
    if (queryParameters != null) {
      return uri.replace(queryParameters: queryParameters);
    } else {
      return uri;
    }
  }

  Future<T> _get<T>(
    String path,
    T Function(dynamic json) parser, [
    Map<String, dynamic>? queryParameters,
  ]) async {
    final url = _makeUri(path, queryParameters);

    final request = await _client.getUrl(url);
    final response = await request.close();
    final dynamic json = (await response.jsonDecode());

    final result = parser(json);
    return result;
  }

  Future<T> _post<T>(
    String path,
    T Function(dynamic json) parser,
    Map<String, dynamic> bodyParameters, [
    Map<String, dynamic>? urlParameters,
  ]) async {
    final url = _makeUri(path, urlParameters);
    final request = await _client.postUrl(url);

    request.headers.contentType = ContentType.json;
    request.write(jsonEncode(bodyParameters));
    final response = await request.close();
    final dynamic json = (await response.jsonDecode());

    final result = parser(json);
    return result;
  }

  Future<CurrentWeatherResponse> getCurrentWeather(
    String q,
  ) async {
    CurrentWeatherResponse parser(dynamic json) {
      final jsonMap = json as Map<String, dynamic>;
      final response = CurrentWeatherResponse.fromJson(jsonMap);
      return response;
    }

    final result = _get(
      '/current.json',
      parser,
      {
        'key': _apiKey,
        'q': q,
      },
    );
    return result;
  }
}

extension HttpClientResponseJsonDecode on HttpClientResponse {
  Future<dynamic> jsonDecode() async {
    return transform(utf8.decoder)
        .toList()
        .then((value) => value.join())
        .then((value) => json.decode(value));
  }
}
